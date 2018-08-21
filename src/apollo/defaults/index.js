export default {
    surveyApp:{
        __typename: 'SurveyAppRoot',
        listUsers:{
            items:[],
            nextToken:null,
            __typename:'UserConnection'
        },
        getUserAttributes:{
            name:'',
            role:'',
            __typename:'attributes'
        }
    }
}