import { DB } from "./database"
import { DBListAllPage } from "../pages/db/ListAll"

export function randomId() {
    return Math.random().toString(36).substring(7) + '-' + Math.random().toString(36).substring(7) + '-' + Math.random().toString(36).substring(7)
}

export function timestamp() {
    return new Date().toISOString()
}

// Takes in a date and returns the first day of that week. Monday is the first day of the week for this function.
// if today is Monday, it will return the date of today. If today is Tuesday, it will return the date of the previous Monday.
export function getFirstDayOfWeek (date: Date) {
    const day = date.getDay()
    const diff = date.getDate() - day + (day == 0 ? -6 : 1)
    const final =  new Date(date.setDate(diff)).toISOString().split('T')[0]
    return `Week of ${final}`
}
