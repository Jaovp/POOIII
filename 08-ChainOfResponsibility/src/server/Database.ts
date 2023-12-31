import PermissionType from "./PermissionType";

interface DatabaseItem{
    email: string;
    password: string;
    permission: PermissionType;
}

const Database: DatabaseItem[] = [
    {email: "joao@gmail.com",
    password: "123456",
    permission: PermissionType.ADMIN
    },
    {email: "victor@hotmail.com",
    password: "123123",
    permission: PermissionType.USER
    }
];

export default Database;