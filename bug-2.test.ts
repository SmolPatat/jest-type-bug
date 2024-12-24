// In this file we """fix""" the TypeScript issue by appying its suggestion.
// However, Jest incorrectly deduces the type to be correct and doesn't complain.
// At runtime the argument destructure leads to an incorrect value assignment.

// NOTE the deduced types:
// input: VeryComplex3
// expected: number

type VeryComplex3 = {
    field1: number,
    manyOtherFields: unknown
};

it.each<{ input: VeryComplex3, expected: number }>([
    {
        // @ts-expect-error -- Missing irrelevant fields.
        input: {
            field1: 42
        },
        expected: 42
    }
])('no type issue', (...{ input, expected }) => {
    expect(input).toHaveProperty('field1', expected)
})