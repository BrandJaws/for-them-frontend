// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { StaticImageData } from "next/image"

export type User = {
  id: number
  name: string
}

export type NavItemProps = {
  title?: string
  slug?: string
  url?: string
}

export type WellnessProps = {
  title?: string
  url?: StaticImageData
}

export type ColorProps = {
  hexCode?: string
  name?: string
}
