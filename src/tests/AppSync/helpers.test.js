import {
    getUnique, 
    updateArrayAppSync,
    updateAppSync
} from '../../AppSync/helpers'

describe('getUnique', ()=>{
    it('gets unique values when only one unique value', ()=>{
        const arr=[{id:'5'}, {id:'5'}]
        expect(getUnique(arr, 'id')).toEqual([{id:'5'}])
    })
    it('gets unique values when no duplicates', ()=>{
        const arr=[{id:'5'}, {id:'6'}]
        expect(getUnique(arr, 'id')).toEqual(arr)
    })
    it('gets unique values when duplicates arent next to each other', ()=>{
        const arr=[{id:'5'}, {id:'6'}, {id:'5'}]
        expect(getUnique(arr, 'id')).toEqual([{id:'5'}, {id:'6'}])
    })
})

