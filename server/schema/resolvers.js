const { UserList, MovieList } = require("../SampleData");
const _ = require("lodash"); // Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.

const resolvers = {
    Query: {
        // User Resolvers
        users: (parent, args, context, info) => {
            if (UserList) return { users: UserList };

            return { message: "There was an error!" }
        },

        user: (parent, args, context, info) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        // Movie Resolvers
        movies: () => {
            return MovieList
        },

        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { movie });
            return movie;
        },
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },

        updateUsername: (parent, args) => {
            const id = args.input.id;
            const newUsername = args.input.newUsername;
            /* use this single liner instead of above
            const {id, newUsername} = args.input; */
            let userUpdated;
            UserList.forEach((user) => {
                if (user.id === id) {
                    user.username = newUsername;
                    userUpdated = user;
                }
            });

            return userUpdated;
        },

        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, (user) => user.id === Number(id));
            return null;
        }
    },

    UsersResult: {
        __resolveType(obj) {
            if (obj.users) {
                return "UsersSuccessfulResult";
            }

            if (obj.message) {
                return "UsersErrorResult";
            }

            return null;
        }
    }
};

module.exports = { resolvers };