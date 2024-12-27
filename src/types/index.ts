export interface TableRow {
  id: number;
  name: string;
  title: string;
  status: 'Active' | 'Inactive';
  role: string;
  description: string;
}