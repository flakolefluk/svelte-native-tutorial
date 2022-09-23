export type PokemonListApiResponse = {
    count: number,
    next: string | null,
    previous: string | null
    results: Array<{
        name: string,
        url: string
    }>
}

export type PokemonListItem = {
    name: string,
    image: string
}