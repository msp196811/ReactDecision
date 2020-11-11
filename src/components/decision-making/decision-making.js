import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withEmployeestoreService } from '../hoc'
import {decisionsLoaded, decisionRequested, coeficientsLoaded, coeficientsRequested} from '../../actions'
import Spiner from '../spinner'
import DecisionMakingItem from '../decision-making-item'
import './decision-making.css'


class DecisionMaking extends Component{

    componentDidMount(){
        const { employeestoreService, decisionsLoaded, decisionRequested,coeficientsLoaded,coeficientsRequested} = this.props;
        decisionRequested();//показывает лоадинг индикатор
        coeficientsRequested();
        employeestoreService.getDecisionMaking() // после чего загружаем данные
               .then((data) => decisionsLoaded(data));
        employeestoreService.getCoeficients()
                .then((data) => coeficientsLoaded(data))
    }



    render(){
        const renderRow = ({people,
                            worksInCompany,
                            availabilityOfCertificates,
                            experienceInLeadershipPosition,
                            communecable,
                            stroussoSustainability,
                            willingnessToLearnNew,
                            willingnessToTravel,
                            irregularWorkingHours},idx) => {
            return(
                    <DecisionMakingItem key={idx}
                                        people={people}
                                        worksInCompany={worksInCompany}
                                        availabilityOfCertificates={availabilityOfCertificates}
                                        experienceInLeadershipPosition={experienceInLeadershipPosition}
                                        communecable={communecable}
                                        stroussoSustainability={stroussoSustainability}
                                        willingnessToLearnNew={willingnessToLearnNew}
                                        willingnessToTravel={willingnessToTravel} 
                                        irregularWorkingHours={irregularWorkingHours}/>
            );
        }
        const { decision, loading, coef} = this.props;
        
        if(loading){
            return <Spiner />
        }

        const onClickDecision = () => {
            let table = document.getElementById("tbody__decision");
            let assessm = [];
            let people = [];
            for(let i = 0, n = table.rows.length; i < n; i++){
                let temp = [];
                for(let j = 0, m = table.rows[i].cells.length; j < m; j++){
                    if(j === 0){
                        people.push(table.rows[i].cells[0].innerHTML);
                        continue;
                    }
                    if(table.rows[i].cells[j].innerHTML === 'YES'){
                        temp.push(1);
                    }
                    else if(table.rows[i].cells[j].innerHTML === 'NO'){
                        temp.push(0);
                    }
                    else{
                        temp.push(parseFloat(table.rows[i].cells[j].innerHTML))
                    }
                    console.log(table.rows[i].cells[j].innerHTML)
                }
                assessm.push(temp);
            }
            const coef_max = new Array();
            const coef_min = new Array();
            let buffer = [],
                max = a => a.reduce((m,x)=> m>x ? m:x),
                min = a => a.reduce((m,x)=> m<x ? m:x);
            
            for(let j = 0;j <= assessm[1].length;j++){
                if(buffer.length !== 0){
                    coef_max[j-1] = max(buffer);
                    coef_min[j-1] = min(buffer);
                }
                for(let i = 0;i <= assessm.length - 1 ;i++){
                    buffer[i] = assessm[i][j];
                } 
            }




            let temp = [];
            const result = [];
            for(let i = 0;i < assessm.length;i++){
                buffer = [];
               for(let j = 0;j < assessm[1].length;j++){
                    if(coef_max[j] - coef_min[j] !== 0){
                        buffer[j] = (assessm[i][j] - coef_min[j])/(coef_max[j] - coef_min[j]);
                    }
                    else{
                        buffer[j] = 0;
                    }
                }
             temp[i] = buffer;             
      }
      let summ_coef = 0;
             
      const array_coef = [];
      coef.map((item) => {
          const { coeficient } = item;
          array_coef.push(parseFloat(coeficient));
      })
      
       for(let i = 0;i < temp.length;i++){
           summ_coef = 0;
           for(let j = 0; j < temp[0].length;j++){
               summ_coef += temp[i][j] * array_coef[j];
           }
           result.push([people[i],summ_coef]);
       }

        let t = document.getElementById("decision");
        let p = t.parentElement;
        p.removeChild(t);

        let section = document.getElementById('section_decision');
        let h2 = document.createElement("h2");
        h2.innerHTML = "Результаты";
        section.appendChild(h2);
        let element = section.appendChild(document.createElement("TABLE"));
        element.className = "table table-bordered table-hover table-sm";
        element.id = "table__decision";
        let tr,
            td,
            th;
        let thead = document.createElement("thead");
        thead.className = "table__decision__thead";
        tr = document.createElement("tr");
        th = document.createElement("th");
        th.innerHTML = "Инициалы";
        tr.appendChild(th);
        th = document.createElement("th");
        th.innerHTML = "Результаты";
        tr.appendChild(th);
        thead.appendChild(tr);
        element.appendChild(thead);
        for(let i = 0; i < result.length;i++){
            tr = document.createElement("tr");
            for(let j = 0; j < result[0].length; j++){
                td = document.createElement("td");
                td.innerHTML = result[i][j];
                tr.appendChild(td);
            }
            element.appendChild(tr);
        }
        }

        return(
           <div className="section"
                id="section_decision">
               <div className="decision"
                    id="decision">
                    <div className="decision__header">
                            <h3 className="title__decision">Принятие решения по сотрудникам</h3>
                            <button className="btn btn-primary"
                                    onClick={() => onClickDecision()}>Принять решение о назначении</button>
                    </div>
                    <table className="table table-hover table-sm" 
                           id="table__decision">
                   <thead>
                       <tr>
                           <th>Имя альтернативы</th>
                           <th>Возраст</th>
                           <th>Время работы<br />в компании</th>
                           <th>Наличие сертификатов</th>
                           <th>Опыт работы<br /> на руководящей должности</th>
                           <th>Коммуни-< br />кабельность</th>
                           <th>Струссо-<br />устойчивость</th>
                           <th>Готовность изучать новое</th>
                           <th>Готовность к командировкам</th>
                           <th>Ненормированый рабочий день</th>
                       </tr>
                   </thead>
                   <tbody id="tbody__decision">
                            {
                                decision.map(renderRow)   
                            }  
                   </tbody>
               </table>
               </div>
           </div>
        );
    }
}

const mapStateToProps = ({ decision,loading, coeficients}) => {
    return { 
        decision:decision,
        loading: loading,
        coef: coeficients
    };
}


const mapDispatchToProps = {
    decisionsLoaded,
    decisionRequested,
    coeficientsLoaded,
    coeficientsRequested
    /*return{   
        decisionsLoaded: (data) => dispatch(decisionsLoaded(data)), 
        decisionRequested: () => dispatch(decisionRequested()),
        onClickDecision: (decision) => dispatch(onClickDecision(decision))
    };*/
};
export default withEmployeestoreService()(connect(mapStateToProps,mapDispatchToProps)(DecisionMaking));