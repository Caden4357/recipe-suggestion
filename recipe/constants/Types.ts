export type ColorScheme = 'light' | 'dark'

export type FoodItemType = {
    id: string,
    title: string,
    image: string
}

export type Theme = {
    text: string,
    background: string,
    tint: string,
    icon: string,
    tabIconDefault: string,
    tabIconSelected: string,
    headerBackground: string,
    oppColor: string,
    statusBarBackground: string
}

export type Recipe = {
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    dairyFree: boolean,
    veryHealthy: boolean,
    cheap: boolean,
    veryPopular: boolean,
    sustainable: boolean,
    weightWatcherSmartPoints: number,
    gaps: string,
    lowFodmap: boolean,
    ketogenic: boolean,
    whole30: boolean,
    servings: number,
    preparationMinutes: number,
    cookingMinutes: number,
    sourceUrl: string,
    spoonacularSourceUrl: string,
    aggregateLikes: number,
    creditText: string,
    sourceName: string,
    extendedIngredients: ExtendedIngredient[],
    id: string,
    title: string,
    readyInMinutes: number,
    image: string,
    imageType: string,
    instructions: string
}


export type ExtendedIngredient = {
    aisle: string,
    amount: number,
    consistency: string,
    id: number,
    image: string,
    measures: string,
    meta: string[],
    name: string,
    nameClean: string,
    original: string,
    originalName: string,
    unit: string
}

