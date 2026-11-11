import { clamp, smoothstep } from './motion'

export const DISH_COUNT = 8

/** Shared scroll state for the dish stage (plain JS, no WebGL). */
export const stage = {
  pos: 0,
  active: 0,
  pointer: { x: 0, y: 0 },
  spin: 0,
  spinTarget: 0,
}

export function buildOf(index) {
  return smoothstep(0.015, 0.6, stage.pos - index)
}

export function localOf(index) {
  return stage.pos - index
}

export function dishAt(pos) {
  return clamp(Math.floor(pos), 0, DISH_COUNT - 1)
}

let dishNav = null
export function setDishNav(fn) {
  dishNav = fn
}
export function goToDish(index) {
  if (dishNav) dishNav(index)
}
