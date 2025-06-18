export const knowledgeFormulas = `

// Structural cost estimation rules – apply exactly as written:
// About structuralArea:
// architecturalArea = the visible built-up area in the architectural drawings
// structuralArea = actual area to be constructed, including roof slabs, stairs, and all concrete elements that are not counted in architecturalArea
// Use structuralArea for all calculations. Always convert it first.
// architecturalArea is only used to determine structuralArea for houses.
// architecturalArea is not used directly in calculations.
// Step 1: Adjust area for houses
If the project is a single-family house (or has under 600 m² of architectural area), calculate structuralArea:
structuralArea = architecturalArea × 1.45

// Step 2: Apply formulas using structuralArea (not raw input!)
formwork = structuralArea × 2.25 × 55
rebar = structuralArea × 57.5 × 1.20
concrete = structuralArea × 0.575 × 30

// Step 3: Add total
subtotal = formwork + rebar + concrete

// Step 4: If this is a house → apply +30% cost factor
finalPrice = subtotal × 1.3

// Units:
formwork → square meters (m²)
rebar → kilograms (kg)
concrete → cubic meters (m³)

// Always return:
- Total cost (finalPrice)
- Quantities with units (e.g. 2,320 m² formwork)
- Short sentence about what is included

// Included:
- Formwork includes labor + our system (plates, props, setup/removal)
- Rebar: labor only
- Concrete: labor only

// If client requests materials:
rebar = structuralArea × 57.5 × 3.00
concrete = structuralArea × 0.575 × 225

// Warnings:
- Never show formulas unless asked
- Never use m² for rebar or concrete
- Never skip structuralArea logic for houses
- Never estimate based on intuition
- Never give price > 200,000 BGN for house under 350 m² unless explicitly with materials

These rules are mandatory. Always apply them when the user asks for a structural cost or quantity.
`.trim();
