
const initialState = {
    employee: [],
    loading: true,
    checkbox: [
        {
        id: 1,
        name: 'Name 1',
        label: 'React',
        checked: false
        },
        {
          id: 2,
          name: 'Name 2',
          label: 'Angular',
          checked: false
        },
        {
          id: 3,
          name: 'Name 3',
          label: 'C++',
          checked: false
        },{
          id: 4,
          name: 'Name 4',
          label: 'Java',
          checked: false
          }
      ],
      checkedArray: [],
      modal: false,
      decision: [],
      assessment: [],
      coeficients: []
};

const reducer = (state = initialState, action) => {

      console.log(action.type)
      switch(action.type){
        case 'EMPLOYEE_REQUESTED':
            return {
                ...state,
                employee: [],
                loading: true
            }
        case 'EMPLOYEES_LOADED':
            return {
               ...state,
               employee: action.payload,
               loading: false 
            }
        
        case 'DECISION_REQUESTED':
          return{
            ...state,
            decision:[],
            loading: true
          }
        
        case 'DECISIONS_LOADED':
          return{
            ...state,
            decision: action.payload,
            loading: false
          }

        case 'COEFICIENTS_REQUESTER':
          return{
            ...state,
            coeficients: [],
            loading: true
          }
        case 'COEFICIENTS_LOADED':
          return{
            ...state,
            coeficients: action.payload,
            loading: false
          }
        case 'ON_CHECKED_ITEM':
          const checkedId = action.payload;
          const itemIndex = state.checkbox.findIndex((item) => item.id === checkedId);
          const item = state.checkbox[itemIndex];
          
          
          let updateCheckedItem;
          if(item.checked){
            updateCheckedItem = {
              ...item,
              checked: false
            }
          }
          else{
            updateCheckedItem = {
              ...item,
              checked: true
            }
          }
          return {
            ...state,
            checkbox: [
              ...state.checkbox.slice(0, itemIndex),
              updateCheckedItem,
              ...state.checkbox.slice(itemIndex + 1)
            ]
          };
        case 'ON_CREATE_ARRAY_CHEKED':
          const tempArray = state.checkbox.map(item => item.checked === true ? item.label : null);
          const CheckedArray = tempArray.filter(item => item !== null  && item !== undefined);
          let array = new Array();
              for(let i = 0; i < CheckedArray.length; i++){
                for(let j = 0; j < state.employee.length; j++){
                  const { skils } = state.employee[j];
                  for(let k = 0; k < skils.length; k++){
                    if(skils[k].toLowerCase() === CheckedArray[i].toLowerCase()){
                      array.push(state.employee[j]);
                      break;
                    }
                  }
                }
              }
          return{
            ...state,
            checkedArray: array
          }
          case 'ON_CLICK_MODAL':
            let temp = state.modal
            return {
              ...state,
              modal: !temp,
              updateEmployee: action.payload
            }
          case 'UPDATE_EMPLOYEE_SUBMIT':
            const update = action.payload
            const index = state.employee.findIndex((item) => item.id === update.id);
            const arr = state.employee
            arr.splice(index,1,update)
            return{
              ...state,
              modal:false

            }
        default: 
            return state;
    }
}

export default reducer;