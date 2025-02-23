import User from "../models/User.js";
import bcrypt from "bcrypt";

const changePassword = async (req, res) => {
    try {
        const { userId, oldPassword, newPassword } = req.body;

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        // Verify old password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, error: "Incorrect old password" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update password
        await User.findByIdAndUpdate(userId, { password: hashedPassword }, { new: true });

        return res.status(200).json({ success: true, message: "Password updated successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Error updating password" });
    }
};

export { changePassword };
