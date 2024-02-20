import datetime
from fpdf import FPDF


def generate_report():
    # Get user inputs
    name = name
    age = 
    gender = input("Enter patient gender: ")
    symptoms = input("Enter patient symptoms (separated by comma): ").split(",")
    diagnosis = input("Enter patient diagnosis: ")

    # Generate medical report
    report = f"Patient Name: {name}\nAge: {age}\nGender: {gender}\nSymptoms:\n"
    for symptom in symptoms:
        report += f"- {symptom}\n"
    report += f"Diagnosis: {diagnosis}\nMedications:\n"
    for medication in medications:
        report += f"- {medication} ({dosage}mg, {duration} days)\n"
    report += f"Follow-up Instructions: {follow_up}"

    return report


# Get medical report summary
medical_report = generate_report()

# Get current date and time
now = datetime.datetime.now()

# Create a PDF object
pdf = FPDF()

# Add a page
pdf.add_page()

# Set font and size for the report title
pdf.set_font("Arial", "B", 24)

# Write the report title
pdf.cell(0, 20, "Medical Report", align="C")
pdf.ln()

# Set font and size for the meeting summary
pdf.set_font("Arial", "", 12)

# Write the meeting summary
pdf.cell(0, 10, f"Date: {now.strftime('%Y-%m-%d %H:%M:%S')}", ln=True)
pdf.multi_cell(0, 10, medical_report)

# Save the PDF
pdf.output("medical_report.pdf")