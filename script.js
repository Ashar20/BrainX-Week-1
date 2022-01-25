"use strict";

window.onload = function() {

    var quiz = {
        title: 'BrainX: Can you solve this?',

        questions: [{
                text: "Which of these personalization strategies would you choose to increase conversions for your shoppers?",
                responses: [{
                        text: 'Homepage: Recommended for you I PDP: Recently EngagedI Shopping Cart: Complete the basket',
                        value: 'Yay! That’s what we would have picked as well'
                    },
                    {
                        text: 'Homepage: Products on sale I PDP: Similar products recommendationI Cart: Trending products recommendation',
                        value: 'Hmm…that’s interesting. We had picked option A because retailers  saw a 50% increase in site wide conversions  with personalized recommendations.'
                    },
                   
                ]
            },
           
        ]
    };


    var app = new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            userResponses: Array()
        },
        methods: {
            // Go to next question
            Submit:function() {
                this.questionIndex++;
                console.log(this.userResponses);
            },
            // Go to previous question
            prev: function() {
                this.questionIndex--;
            },
            score: function() {
                //find the highest occurence in responses
                var modeMap = {};
                var maxEl = this.userResponses[0],
                    maxCount = 1;
                for (var i = 0; i < this.userResponses.length; i++) {
                    var el = this.userResponses[i];
                    if (modeMap[el] == null)
                        modeMap[el] = 1;
                    else
                        modeMap[el]++;
                    if (modeMap[el] > maxCount) {
                        maxEl = el;
                        maxCount = modeMap[el];
                    }
                }
                return maxEl;
            }
        }
    });
}