import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  items : {type : mongoose.Schema.Types.ObjectId, ref: "item"},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});



userSchema.pre('save', async function(next) {
    // Only hash the password if it's modified (or new)
    if (!this.isModified('password')) return next();
    
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password along with the new salt
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        // Use bcrypt to compare the provided password with the hashed password
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        delete ret.__v;
        return ret;
    }
});

export default mongoose.model('user', userSchema);