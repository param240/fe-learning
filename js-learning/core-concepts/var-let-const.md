var, let, const

var:
    - function scoped
    - hoisted to undefined
    - allows redeclaration in same scope
    - allows reassigment

let:
    - block scoped
    - hoisted but unassigned, leaves in Temporal dead zone (TDZ)
    - Doesn't allow redeclaration in same scope
    - Allows reassigment

const:
    - block scoped
    - hoisted but uninitialized, leaves in temporal dead zone (TDZ)
    - Doesn't allow redeclaration in same scope
    - Doesn't allow reassignment
