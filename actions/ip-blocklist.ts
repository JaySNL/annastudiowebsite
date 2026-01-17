// This is a simple blocklist implementation
// In a production environment, you might want to use a database instead

// Array of blocked IP addresses
export const blockedIps: string[] = [
  // Add IPs to block here
  // "123.456.789.0",
]

// Function to check if an IP is blocked
export function isIpBlocked(ip: string): boolean {
  return blockedIps.includes(ip)
}
