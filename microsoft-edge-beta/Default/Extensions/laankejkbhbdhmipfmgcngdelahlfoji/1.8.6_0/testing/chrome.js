import{beforeEach}from"vitest";import{mock,mockReset}from"vitest-mock-extended";chrome=mock(void 0,{deep:!0}),beforeEach(()=>{mockReset(chrome)});