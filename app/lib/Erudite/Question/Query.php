<?php

namespace Erudite\Question;

class Query {
    public $question = '';
    public $query = '';
    public $objectPath = '';
    public $optionsPath = '';
    
    private $dbConnector = null;
    
    
    /**
     * Constructor
     * @param object $dbConnector implementing GameDB interface
     * @param array $data
     */
    public function __construct($dbConnector, $data = array())
    {
        foreach ($data as $param=>$value) {
            if (isset($this->{$param})) {
                $this->{$param} = $value;
            }
            $this->dbConnector = $dbConnector;
        }
    }
    
    public function generateQuestion($countries, $optionsNum=4)
    {
        $results = $this->query($countries);

        $set = $this->getCorrectSet($results);

        $questionText = $this->buildQuestion($this->question, $set['object']);
        $question = new Question($questionText);
        $question->addOption($set['option'], true);
        
        $otherOptions = $this->generateIncorrectOptions($results, $set['option'], $optionsNum-1);
        
        foreach ($otherOptions as $option) {
            $question->addOption($option, false);
        }
        
        $question->shuffleOptions();
        
        return $question;
    }
    
    private function query($countries, $limit=30)
    {
        $query = $this->getQuery($countries, $limit);
        return $this->dbConnector->query($query);
    }
    
    private function getQuery($countries, $limit=30)
    {
        $countriesJson = json_encode($countries);
        
        return str_replace(array('%countries%','%limit%'), array($countriesJson, $limit), $this->query);
    }
    
    private function getCorrectSet($data) {
        $setKey = array_rand($data);
        $setTemp = $data[$setKey];
        $set = array(
            'object' => $setTemp[$this->objectPath],
            'option' => $setTemp[$this->optionsPath]
        );
        
        if (is_array($set['option'])) {
            $set['option'] = $this->anyFromArray($set['option']);
        }
        
        if (is_array($set['object'])) {
            $set['object'] = $this->anyFromArray($set['object']);
        }
        
        return $set;
    }
    
    private function anyFromArray($array) {
        if (count($array)) {
            $key = array_rand($array);
            return $array[$key];
        } else {
            return '';
        }
    }
    
    private function generateIncorrectOptions($data, $except, $optionsNum=4) {
        $options = array();
        $found = 0;
        shuffle($data);
        foreach ($data as $item) {
            if ($found >= $optionsNum) break;
            
            $option = $item[$this->optionsPath];

            if (is_array($option)) {
                $option = $this->anyFromArray($option);
            }
            
            if ( ($option != $except) && (!isset($options[$option])) ) {
                $found++;
                $options[$option] = $option;
            }
        }
        
        return $options;
    }
    
    private function buildQuestion($question, $object) {
        return str_replace('%object%', $object, $question);
    }
}

?>