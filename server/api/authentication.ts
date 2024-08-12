import express, {
  Request,
  Response,
  NextFunction
} from "express";
import Sequelize from "sequelize";
import bcrypt from "bcrypt";

import { Models } from "../database";

const router: express.Router = express.Router();

// router.post("/login", (req: Request, res: Response, next: NextFunction) => {
//   const { usernameOrEmail, password } = req.body;
//   Models.User.scope("withPassword").findOne({
//     where: Sequelize.or(
//       { username: usernameOrEmail },
//       { email: usernameOrEmail}
//     )
//   })
//   .then(userOrNull => {
//     if(!userOrNull) {
//       res
//         .status(404)
//         .send("User not found")
//     } else {
//       if(userOrNull.loggedIn == "Online") {
//         Models.User.destroy({
//           where: Sequelize.and(
//             { sessionId: req.session.id },
//             { userType: "Guest" }
//           )
//         })
//         .then(() => {
//           Models.User.findOne({
//             where: Sequelize.or(
//               { username: usernameOrEmail },
//               { email: usernameOrEmail }
//             ),
//             attributes: {
//               exclude: [ "password" ]
//             }
//           })
//           .then(user => {
//             res
//               .status(200)
//               .send(user)
//           })
//         })
//       } else { 
//         bcrypt.compare(password, userOrNull.password)
//         .then(result => {
//           if(!result) {
//             res
//               .status(401)
//               .send("Credentials incorrect")
//           } else {
//             Models.User.destroy({
//               where: Sequelize.and(
//                 { sessionId: req.session.id },
//                 { userType: "Guest" }
//               )
//             })
//             .then(() => {
//               userOrNull.update({
//               loggedIn: "Online",
//               sessionId: req.session.id
//               })
//               .then(() => {
//                 Models.User.findOne({
//                   where: Sequelize.or(
//                     { username: usernameOrEmail },
//                     { email: usernameOrEmail }
//                   ),
//                   attributes: {
//                     exclude: [ "password" ]
//                   }
//                 })
//                 .then(user => {
//                   res
//                     .status(201)
//                     .send(user)
//                 });
//               })
//             });
//           };
//         })
//       };
//     };
//   })
//   .catch(e => {
//     res
//       .status(500)
//       .send();
//     next(e);
//   });
// });

// router.post("/signup", ( req: Request, res: Response, next: NextFunction) => {
//   const hashedPassword = bcrypt.hashSync(req.body.password, 12);
//   Models.User.destroy({
//     where: Sequelize.and(
//       { sessionId: req.session.id },
//       { userType: "Guest" }
//     )
//   })
//   .then(() => {
//     Models.User.create({ 
//       sessionId: req.session.id,
//       username: req.body.usernameOrEmail,
//       password: hashedPassword,
//       userType: "Unconfirmed"
//     })
//     .then(createdUser => {
//       createdUser.update({
//         loggedIn: "Online",
//       })
//       .then(() => {
//         Models.User.findOne({
//           where: Sequelize.or(
//             { username: req.body.usernameOrEmail },
//             { email: req.body.usernameOrEmail }
//           ),
//           attributes: {
//             exclude: [ "password" ]
//           }
//         })
//         .then(user => {
//           res
//             .status(201)
//             .send(user)
//         })
//       })
//     })
//   })
//   .catch(e => {
//     res
//       .status(500)
//       .send();
//       next(e);
//   })
// });

// router.post("/logout", (req: Request, res: Response, next: NextFunction) => {
//   Models.User.findByPk(req.body.userId)
//   .then(userOrNull => {
//     if(!userOrNull) {
//       res
//         .status(404)
//         .send("User not found")
//     } else {
//       userOrNull.update({ loggedIn: "Offline" })
//       .then(() => Models.User.create({ sessionId: req.session.id }))
//       .then(user => {
//         res
//           .status(201)
//           .send(user);
//       });
//     };
//   })
//   .catch(e => {
//     res
//       .status(500)
//       .send()
//     next(e);
//   });
// });

export default router;