// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// // import { users } from '../lib/placeholder-data';

// const client = await db.connect();

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       login VARCHAR(255) NOT NULL UNIQUE,
//       password VARCHAR(255) NOT NULL,
//       created_at TIMESTAMP DEFAULT NOW()
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//         INSERT INTO users (id, login, password)
//         VALUES (${user.id}, ${user.login}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }

// async function seedUserProfiles() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS dog_owners (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       user_id UUID NOT NULL UNIQUE,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL,
//       phone VARCHAR(20),
//       image_url VARCHAR(255),
//       FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
//     );
//   `;
// }

// async function seedDogs() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS dogs (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       dog_owner_id UUID NOT NULL UNIQUE,
//       name VARCHAR(255) NOT NULL,
//       breed VARCHAR(255) NOT NULL,
//       birth_year INT NOT NULL,
//       sex VARCHAR(10) CHECK (sex IN ('boy', 'girl')),
//       CONSTRAINT fk_dog_owner FOREIGN KEY (dog_owner_id) REFERENCES dog_owners (id) ON DELETE SET NULL
//     );
//   `;
// }

// async function seedTrials() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS trials (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       start_at VARCHAR(255) NOT NULL,
//       ends_on VARCHAR(255) NOT NULL,
//       judge_id VARCHAR(255) NOT NULL,
//       description TEXT
//     );
//   `;
// }

// async function seedApplications() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS applications (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       dog_owner_id UUID NOT NULL,
//       dog_id UUID NOT NULL,
//       trial_id UUID NOT NULL,
//       registration_date TIMESTAMP DEFAULT NOW(),
//       CONSTRAINT fk_dog_owner FOREIGN KEY (dog_owner_id) REFERENCES dog_owners (id) ON DELETE SET NULL,
//       CONSTRAINT fk_dog FOREIGN KEY (dog_id) REFERENCES dogs (id) ON DELETE SET NULL,
//       CONSTRAINT fk_trial FOREIGN KEY (trial_id) REFERENCES trials (id) ON DELETE SET NULL
//     );
//   `;
// }

// async function seedUnregistredApplications() {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS UnregistredApps (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         phone VARCHAR(20),
//         image_url VARCHAR(255),
//         dog_name VARCHAR(255) NOT NULL,
//         breed VARCHAR(255) NOT NULL,
//         dog_birth_year VARCHAR(255) NOT NULL,
//         sex VARCHAR(10) CHECK (sex IN ('boy', 'girl')),
//         trial VARCHAR(10) NOT NULL,
//         registration_date TIMESTAMP DEFAULT NOW()
//       );
//     `;
//   }

// export async function GET() {
//   try {
//     await client.sql`BEGIN`;
//     await seedUsers();
//     await seedUserProfiles();
//     await seedDogs();
//     await seedTrials();
//     await seedApplications();
//  await seedUnregistredApplications();
//     await client.sql`COMMIT`;


//     return Response.json({ message: 'Database seeded successfully' });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }
