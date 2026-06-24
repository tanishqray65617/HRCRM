import bcrypt from 'bcryptjs';
import supabase from '../utils/supabase.js';
import { generateToken } from '../utils/jwt.js';

export const loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data: employee, error } = await supabase
      .from('Employee')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (error) throw error;

    if (employee && (await bcrypt.compare(password, employee.password))) {
      res.json({
        id: employee.id,
        name: employee.name,
        email: employee.email,
        role: 'employee',
        token: generateToken(employee.id, 'employee'),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data: admin, error } = await supabase
      .from('Admin')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (error) throw error;

    // TEMPORARY: using plain text password for admin
    if (admin && (password === admin.password)) {
      res.json({
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: 'admin',
        token: generateToken(admin.id, 'admin'),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAdminSettings = async (req, res) => {
  try {
    const { name, password } = req.body;
    
    const updates = {};
    if (name) updates.name = name;
    if (password) updates.password = password;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ message: 'No updates provided' });
    }

    const { data, error } = await supabase
      .from('Admin')
      .update(updates)
      .eq('id', req.user.id)
      .select()
      .single();

    if (error) throw error;

    res.json({ message: 'Admin settings updated successfully', data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

