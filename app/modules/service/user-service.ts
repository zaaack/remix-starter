
export class UserService {
  private users: any[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      password: "password456",
    },
  ];


  public async getAllUsers() {
    return this.users;
  }
}
