<?php

class questionQuery {
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
    
    private function query($countries, $limit=20)
    {
        $query = $this->getQuery($countries, $limit);
        return $this->dbConnector->query($query);
    }
    
    private function getQuery($countries, $limit=20)
    {
        $countriesJson = json_encode($countries);
        
        return str_replace('%countries%', $countriesJson, $this->query);
    }
    
    private function getCorrectSet($data) {
        $setKey = array_rand($data);
        $set = $data[$setKey];
        return array(
            'object' => $set[$this->objectPath],
            'option' => $set[$this->optionsPath]
        );
    }
    
    private function generateIncorrectOptions($data, $except, $optionsNum=4) {
        $options = array();
        $found = 0;
        shuffle($data);
        foreach ($data as $item) {
            if ($found >= $optionsNum) break;
            if ( ($item[$this->optionsPath] != $except) && (!isset($options[$item[$this->optionsPath]])) ) {
                $found++;
                $options[$item[$this->optionsPath]] = $item[$this->optionsPath];
            }
        }
        
        return $options;
    }
    
    private function buildQuestion($question, $object) {
        return str_replace('%object%', $object, $question);
    }
}

?>