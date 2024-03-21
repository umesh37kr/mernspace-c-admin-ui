export type Credentials = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  tenant: Tenant | null;
};

export type CreateUserData = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  tenantId: number;
  role: string;
};

export type Tenant = {
  id: number;
  name: string;
  address: string;
};

export type FieldData = {
  name: string[];
  value?: string;
};
