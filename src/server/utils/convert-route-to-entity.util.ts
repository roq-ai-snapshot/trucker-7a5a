const mapping: Record<string, string> = {
  customers: 'customer',
  drivers: 'driver',
  organizations: 'organization',
  suppliers: 'supplier',
  transporters: 'transporter',
  users: 'user',
  vehicles: 'vehicle',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
