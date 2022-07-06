import React from 'react';


const DisplayQuestion = (data) => (

  < div className="questionList" >

    {
      data.questions.map(
        (e) => {
          const ans = e.answers;
          // console.log(e.answers);
          return (
            <div>
              <div className="question" id='block1'>Q: {e.question_body} </div>
              <div id='block2'>Helpful? Yes({e.question_helpfulness}) | Add Answer</div>
              {Object.keys(ans).map((key) => {
                return (
                  <div>
                    <div key={ans[key].id}>
                      A: {ans[key].body}
                    </div>
                    <div>by {ans[key].answerer_name},{ans[key].date} | Helpful? Yes({ans[key].helpfulness}) | Report</div>
                  </div>
                );
              })}

            </div>
          )
        }
      )
    }
  </div >

);

export default DisplayQuestion;