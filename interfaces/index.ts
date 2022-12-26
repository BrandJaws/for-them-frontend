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
  target?: string
}

export type WellnessProps = {
  title?: string
  url?: StaticImageData
}

export type BinderShopProps = {
  title?: string
  url?: StaticImageData
  handle?: string
}

export type ColorProps = {
  hexCode?: string
  name?: string
}

export type TestimonialProps = {
  name?: string
  description?: string
}

export type PageProps = {
  id?: string
  title?: string
  body?: string
  bodySummary?: string
  handle?: string
}

export type PageSingleEdgeProps = {
  cursor?: string
  node?: PageProps
}

export type PageEdgesProps = Array<PageSingleEdgeProps>

export type FooterProps = {
  navType?: string
  data?: any
}

export type FooterNavProps = {
  discover?: any | null
  shop?: any | null
  connect?: any | null
}

export type SizeChartProps = {
  code?: string | null
  measurements?: Array<string> | null
}

