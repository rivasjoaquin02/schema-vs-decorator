import { PartialUserDto, UserDto } from "./src/dto";
import { PartialUserSchema, UserSchema } from "./src/schema";

const UserBody = {
  username: "johndoe",
  password: "1234",
  email: "johndoe@email.com",
  age: 26,
};

// schema
const user = UserSchema.parse(UserBody);
const partialUser = PartialUserSchema.parse({
  ...UserBody,
  age: undefined,
  password: undefined,
});

console.log("schema", { user, partialUser });

// dto
const userDto = new UserDto();
userDto.username = UserBody.username;
userDto.password = UserBody.password;
userDto.email = UserBody.email;
userDto.age = UserBody.age;

const partialUserDto = new PartialUserDto();
partialUserDto.username = UserBody.username;
partialUserDto.email = UserBody.email;

console.log("dto", { userDto, partialUserDto });
