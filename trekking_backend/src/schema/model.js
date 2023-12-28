import { model } from "mongoose";

import { attendanceSchema } from "./attendanceSchema.js";
import { studentSchema } from "./studentSchema.js";
import { teacherSchema } from "./teacherSchema.js";
import { batchSchema } from "./batchSchema.js";
import { adminSchema } from "./adminSchema.js";
import { tokenSchema } from "./tokenSchema.js";
import { inquirySchema } from "./inquirySchema.js";
import { productSchema } from "./productSchema.js";
import { contactSchema } from "./contactSchema.js";
import { aboutSchema } from "./aboutSchema.js";

export let About = model("About",aboutSchema)
export let Contact = model("Contact",contactSchema)
export let Product = model("Product",productSchema)
export let Inquiry = model("Inquiry",inquirySchema)
export let Attendance = model("Attendance", attendanceSchema);
export let Student = model("Student", studentSchema);
export let Teacher = model("Teacher", teacherSchema);
export let Batch = model("Batch", batchSchema);
export let Admin = model("Admin", adminSchema);
export let Token=model("Token",tokenSchema);