import * as argon2 from "argon2";

export async function hashPassword(plainPassword: string) {
    try {
      const hash = await argon2.hash(plainPassword);
      return hash;
    } 
    catch (err) {
      console.error('Error hashing password:', err);
    }
}

export async function verifyPassword(storedHash: string, plainPassword: string) {
  try {
    return await argon2.verify(storedHash, plainPassword);
  } catch (err) {
    console.error('Error verifying password:', err);
  }
}