import {UserInterface} from './user.interface';

export interface ApiUserResponseInterface {
  users: UserInterface[],
  total_pages: number,
  per_page: number,
  total: number,
  page: number
}
