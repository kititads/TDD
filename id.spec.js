describe('Group 1', () => {
    test('Test Jest', () => {
        expect(1).toBe(1);
    });

    
}); 
//---------------------------
describe('Group 2', () => {
    test('Test Jest 2', () => {
        expect(1).toBe(1);
    });

    
}); 

//---------------------------
describe('Group 3', () => {
test('returns a random number', () => {

    //ใส่เข้ามาเพิ่ม------------------
    function getNewId() {
        return Math.random()
     }
    //---------------------------
        const mockMath = Object.create(global.Math);
        mockMath.random = jest.fn(() => 0.75);
        global.Math = mockMath;
        const id = getNewId();
        expect(id).toBe(0.75);
     });

}); 