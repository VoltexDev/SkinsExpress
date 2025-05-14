// List of Steam IDs that have trader/admin privileges
// In a production environment, this would be stored in a database
export const TRADER_STEAM_IDS = [
  "76561198012345678", // Example Steam ID 1
  "76561198087654321", // Example Steam ID 2
  // Add more trader Steam IDs as needed
]

// Check if a user is authenticated
export function isAuthenticated(): boolean {
  // In a client component, check if the user has a valid session
  if (typeof window !== "undefined") {
    const steamUser = localStorage.getItem("steamUser")
    return !!steamUser
  }
  return false
}

// Check if a user is a trader/admin
export function isTrader(): boolean {
  if (typeof window !== "undefined") {
    const steamUser = localStorage.getItem("steamUser")
    if (!steamUser) return false

    try {
      const user = JSON.parse(steamUser)
      return TRADER_STEAM_IDS.includes(user.steamid)
    } catch (error) {
      console.error("Error parsing steam user data:", error)
      return false
    }
  }
  return false
}

// Get the current user's data
export function getCurrentUser() {
  if (typeof window !== "undefined") {
    const steamUser = localStorage.getItem("steamUser")
    if (!steamUser) return null

    try {
      return JSON.parse(steamUser)
    } catch (error) {
      console.error("Error parsing steam user data:", error)
      return null
    }
  }
  return null
}
