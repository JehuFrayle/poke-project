export interface PokemonSimplified {
  name: string,
  url: string
}
export interface PokemonList {
  count: number,
  next?: string,
  previous?: string,
  results: PokemonSimplified[]
}
export interface TypeList {
  count: number,
  next?: string,
  previous?: string,
  results: Type2[]
}
// When you fetch a single pokemon, you get a lot of data.
export interface Pokemon {
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  game_indices: Index[]
  height: number
  held_items: HeldItem[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_types: any[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface Ability {
  ability: Ability2
  is_hidden: boolean
  slot: number
}

export interface Ability2 {
  name: string
  url: string
}

export interface Form {
  name: string
  url: string
}

export interface Index {
  game_index: number
  version: Version
}

export interface Version {
  name: string
  url: string
}

export interface HeldItem {
  item: Item
  version_details: VersionDetail[]
}

export interface Item {
  name: string
  url: string
}

export interface VersionDetail {
  rarity: number
  version: Version2
}

export interface Version2 {
  name: string
  url: string
}

export interface Mfe {
  move: Move
  version_group_details: VersionGroupDetail[]
}

export interface Move {
  name: string
  url: string
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  version_group: VersionGroup
}

export interface MoveLearnMethod {
  name: string
  url: string
}

export interface VersionGroup {
  name: string
  url: string
}

export interface Species {
  name: string
  url: string
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
  other: Other
  versions: Versions
}

export interface Other {
  dream_world: DreamWorld
  home: Home
  "official-artwork": OfficialArtwork
}

export interface DreamWorld {
  front_default: string
  front_female: any
}

export interface Home {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface OfficialArtwork {
  front_default: string
  front_shiny: string
}

export interface Versions {
  "generation-i": GenerationI
  "generation-ii": GenerationIi
  "generation-iii": GenerationIii
  "generation-iv": GenerationIv
  "generation-v": GenerationV
  "generation-vi": GenerationVi
  "generation-vii": GenerationVii
  "generation-viii": GenerationViii
}

export interface GenerationI {
  "red-blue": RedBlue
  yellow: Yellow
}

export interface RedBlue {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface Yellow {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export interface GenerationIi {
  crystal: Crystal
  gold: Gold
  silver: Silver
}

export interface Crystal {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

export interface Gold {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

export interface Silver {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

export interface GenerationIii {
  emerald: Emerald
  "firered-leafgreen": FireredLeafgreen
  "ruby-sapphire": RubySapphire
}

export interface Emerald {
  front_default: string
  front_shiny: string
}

export interface FireredLeafgreen {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export interface RubySapphire {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export interface GenerationIv {
  "diamond-pearl": DiamondPearl
  "heartgold-soulsilver": HeartgoldSoulsilver
  platinum: Platinum
}

export interface DiamondPearl {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface HeartgoldSoulsilver {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Platinum {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationV {
  "black-white": BlackWhite
}

export interface BlackWhite {
  animated: Animated
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Animated {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationVi {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire
  "x-y": XY
}

export interface OmegarubyAlphasapphire {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface XY {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationVii {
  icons: Icons
  "ultra-sun-ultra-moon": UltraSunUltraMoon
}

export interface Icons {
  front_default: string
  front_female: any
}

export interface UltraSunUltraMoon {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface GenerationViii {
  icons: Icons2
}

export interface Icons2 {
  front_default: string
  front_female: any
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Stat2
}

export interface Stat2 {
  name: string
  url: string
}

export interface Type {
  slot: number
  type: Type2
}

export interface Type2 {
  name: string
  url: string
}

// models for types
export interface TypeResult {
  damage_relations: DamageRelations
  game_indices: Index[]
  generation: Generation2
  id: number
  move_damage_class: MoveDamageClass
  moves: Mfe[]
  name: string
  names: Name[]
  past_damage_relations: PastDamageRelation[]
  pokemon: PokemonWithTypeSlot[]
}

export interface DamageRelations {
  double_damage_from: DoubleDamageFrom[]
  double_damage_to: DoubleDamageTo[]
  half_damage_from: HalfDamageFrom[]
  half_damage_to: HalfDamageTo[]
  no_damage_from: any[]
  no_damage_to: NoDamageTo[]
}

export interface DoubleDamageFrom {
  name: string
  url: string
}

export interface DoubleDamageTo {
  name: string
  url: string
}

export interface HalfDamageFrom {
  name: string
  url: string
}

export interface HalfDamageTo {
  name: string
  url: string
}

export interface NoDamageTo {
  name: string
  url: string
}

export interface Index {
  game_index: number
  generation: Generation
}

export interface Generation {
  name: string
  url: string
}

export interface Generation2 {
  name: string
  url: string
}

export interface MoveDamageClass {
  name: string
  url: string
}

export interface Mfe {
  name: string
  url: string
}

export interface Name {
  language: Language
  name: string
}

export interface Language {
  name: string
  url: string
}

export interface PastDamageRelation {
  damage_relations: DamageRelations2
  generation: Generation3
}

export interface DamageRelations2 {
  double_damage_from: DoubleDamageFrom2[]
  double_damage_to: DoubleDamageTo2[]
  half_damage_from: HalfDamageFrom2[]
  half_damage_to: HalfDamageTo2[]
  no_damage_from: any[]
  no_damage_to: any[]
}

export interface DoubleDamageFrom2 {
  name: string
  url: string
}

export interface DoubleDamageTo2 {
  name: string
  url: string
}

export interface HalfDamageFrom2 {
  name: string
  url: string
}

export interface HalfDamageTo2 {
  name: string
  url: string
}

export interface Generation3 {
  name: string
  url: string
}

export interface PokemonWithTypeSlot {
  pokemon: PokemonSimplified
  slot: 1 | 2
}

// models for colors and icons

export const ColorByType = {
  bug: "#A8B820",
  dark: "#705848",
  dragon: "#7038F8",
  electric: "#F8D030",
  fairy: "#EE99AC",
  fighting: "#C03028",
  fire: "#F08030",
  flying: "#A890F0",
  ghost: "#705898",
  grass: "#78C850",
  ground: "#E0C068",
  ice: "#98D8D8",
  normal: "#A8A878",
  poison: "#A040A0",
  psychic: "#F85888",
  rock: "#B8A038",
  steel: "#B8B8D0",
  water: "#6890F0"
}
export const IconByType = {
  bug: "assets/types-icons/bug.png",
  dark: "assets/types-icons/dark.png",
  dragon: "assets/types-icons/dragon.png",
  electric: "assets/types-icons/electric.png",
  fairy: "assets/types-icons/fairy.png",
  fighting: "assets/types-icons/fighting.png",
  fire: "assets/types-icons/fire.png",
  flying: "assets/types-icons/flying.png",
  ghost: "assets/types-icons/ghost.png",
  grass: "assets/types-icons/grass.png",
  ground: "assets/types-icons/ground.png",
  ice: "assets/types-icons/ice.png",
  normal: "assets/types-icons/normal.png",
  poison: "assets/types-icons/poison.png",
  psychic: "assets/types-icons/psychic.png",
  rock: "assets/types-icons/rock.png",
  steel: "assets/types-icons/steel.png",
  water: "assets/types-icons/water.png"
}