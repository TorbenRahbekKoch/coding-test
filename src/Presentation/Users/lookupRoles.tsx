import { User } from "./User";
import { UserRole } from "./UserRole";

export function lookupRoles(user: User, roles: UserRole[]): string[] {
    // For each role in user, look it up in roles
    // and then remove any empty, just in case
    return user.roles
        .map(roleId => {
            const role = roles.find(role => role.id == roleId);
            return role != null
                ? role.description
                : '';
        })
        .filter(role => role != '');
}
