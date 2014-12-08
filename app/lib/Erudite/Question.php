<?php
namespace Erudite;

class Question {
    public $question = '';
    public $options = array();
    
    public function __construct($question, $options=array())
    {
        $this->setQuestion($question);
        $this->setOptions($options);
    }
    
    public function addOption($option, $correct)
    {
        $this->options[$option] = array(
            'text' => $option,
            'is_correct' => $correct
        );
    }
    
    public function setQuestion($question)
    {
        $this->question = $question;
    }
    
    public function getQuestion()
    {
        return $this->question;
    }
    
    public function getOptions()
    {
        return $this->options;
    }
    
    public function setOptions($options)
    {
        $this->options = $options;
    }
    
    public function shuffleOptions()
    {
        shuffle($this->options);
    }
}

?>