import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from 'react';
import { IAbout } from '../interfaces/IAbout';
import { IHouse } from '../interfaces/IHouse';

const dataFetch = <T,>(url: string): Promise<T> => fetch(url).then<T>((r) => r.json() as Promise<T>);
// const dataPost = <T, D>(url: string, data: D, method: 'POST' | 'PUT' | 'DELETE' = 'POST'): Promise<T> =>
//     fetch(url, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     }).then<T>((r) => r.json() as Promise<T>);

interface IDataContext {
    apiRoute: string;
    houses?: { data: IHouse[]; timestamp: number };
}

const initialState: IDataContext = {
    apiRoute: '/api/logements.json',
    houses: undefined,
};

type TActionType = 'houses';
interface IReducerAction {
    type: TActionType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: Record<string, any>;
}

function reducer(state: IDataContext, action: IReducerAction): IDataContext {
    switch (action.type) {
        case 'houses':
            return { ...state, ...action.payload };
        default:
            throw new Error();
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataContext = createContext<[IDataContext, (type: TActionType, payload?: Record<string, any>) => void]>([
    initialState,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
]);

export const DataContextProvider = ({
    children,
    apiRoute,
}: {
    children: ReactNode;
    apiRoute?: string;
}): JSX.Element => {
    const [data, dispatchData] = useReducer(reducer, apiRoute ? { ...initialState, apiRoute: apiRoute } : initialState);

    return (
        <DataContext.Provider value={[data, (t, p) => dispatchData({ type: t, payload: p })]}>
            {children}
        </DataContext.Provider>
    );
};

type THousesContext = [houses?: IHouse[], isLoading?: boolean, error?: Error];
export const useHousesContext = (start?: number, limit?: number): THousesContext => {
    const [context, dispatch] = useContext(DataContext);
    const [houses, setHouses] = React.useState<IHouse[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Error | undefined>();

    useEffect(() => {
        if (context.houses && context.houses.timestamp - Date.now() < 60000) {
            setHouses(context.houses.data);
        } else if (!isLoading && !error) {
            setIsLoading(true);
            dataFetch<IHouse[]>(context.apiRoute)
                .then((response) => {
                    setIsLoading(false);
                    dispatch('houses', { houses: { data: response, timestamp: Date.now() } });
                })
                .catch((error) => {
                    setIsLoading(false);
                    setError(error);
                });
        }
        () => {
            setHouses([]);
            setIsLoading(false);
            setError(undefined);
        };
    }, [context.apiRoute, context.houses, dispatch, error, isLoading]);

    return [start || limit ? houses.slice(start, limit) : houses, isLoading, error];
};

type THouseContext = [house?: IHouse, isLoading?: boolean, error?: Error];
export const useHouseContext = (id: string | null): THouseContext => {
    const [context, dispatch] = useContext(DataContext);
    const [house, setHouse] = React.useState<IHouse | undefined>();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Error | undefined>();

    useEffect(() => {
        if (id && context.houses && context.houses.timestamp - Date.now() < 60000) {
            setHouse(context.houses.data.find((h) => h.id === id));
        } else if (id && !isLoading && !error) {
            setIsLoading(true);
            dataFetch<IHouse[]>(context.apiRoute)
                .then((response) => {
                    setIsLoading(false);
                    dispatch('houses', { houses: { data: response, timestamp: Date.now() } });
                })
                .catch((error) => {
                    setIsLoading(false);
                    setError(error);
                });
        }
        () => {
            setHouse(undefined);
            setIsLoading(false);
            setError(undefined);
        };
    }, [context.apiRoute, context.houses, dispatch, error, id, isLoading]);

    return [house, isLoading, error];
};

export const useAboutContext = (): [IAbout[], boolean, Error | undefined] => {
    const data = [
        {
            title: 'Fiabilité',
            description:
                'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        },
        {
            title: 'Respect',
            description:
                'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            title: 'Service',
            description:
                "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            title: 'Sécurité',
            description:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];

    return [data, false, undefined];
};

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);
        const listener = (e: MediaQueryListEvent): void => setMatches(e.matches);
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, [query]);

    return matches;
};

export type ResponsiveCSSProperties<T> = [T?, T?, T?, T?, T?];
export const MediaQuerySelector = <T,>(value: ResponsiveCSSProperties<T> | T): T | undefined => {
    const list = [
        useMediaQuery('(min-width: 80em)'),
        useMediaQuery('(min-width: 62em)'),
        useMediaQuery('(min-width: 48em)'),
        useMediaQuery('(min-width: 30em)'),
        useMediaQuery('(min-width: 0em)'),
    ];
    const safeValue = Array.isArray(value) ? value : [value];

    let result: T | undefined = undefined;
    for (let i = 0; i < 5; i++) {
        if (!safeValue[i] || !list[4 - i]) continue;
        result = safeValue[i];
    }

    return result;
};

export const Helmet: React.VFC<{ title: string }> = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return <></>;
};
