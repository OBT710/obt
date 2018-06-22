import { observable } from "mobx";

export var PersonalInfoData = observable({
    fullName: {    
        key: '1',
        name: 'fullName',
        type: 'text',
        value: '',
    },
    email: {
        key: '2',
        name: 'email',
        type: 'text',
        value: '',
    },
    address: {
        key: '3',
        name: 'address',
        type: 'text',
        value: '',
    },
    id: {
        key: '4',
        name: 'id',
        type: 'text',
        value: '',
    }
})