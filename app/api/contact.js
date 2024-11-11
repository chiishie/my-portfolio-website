import pool from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    try {
      const [result] = await pool.execute(
        `INSERT INTO contacts (first_name, last_name, email, phone, message) VALUES (?, ?, ?, ?, ?)`,
        [firstName, lastName, email, phone, message]
      );

      res.status(200).json({ success: true, data: { id: result.insertId } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Database error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
