<?php
namespace Erudite;
/**
 * Class provides interface to connect to freebase
 * and query it
 */
class Freebase {
    public $apiKey = '';
    const SERVICE_URL = 'https://www.googleapis.com/freebase/v1/mqlread';
    
    public function __construct($apiKey = '')
    {
        $this->setApiKey($apiKey);
    }
    
    public function setApiKey($apiKey)
    {
        $this->apiKey = $apiKey;
    }
    
    public function getApiKey()
    {
        return $this->apiKey;
    }
    
    /**
     * Query freebase database
     * @param string(JSON) $query
     * @param array
     */
    public function query($query)
    {
        $params = array(
                'query' => $query,
                'key' => $this->apiKey
        );
        $url = $this::SERVICE_URL . '?' . http_build_query($params);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $response = json_decode(curl_exec($ch), true);
        curl_close($ch);
        
        return $response['result'];
    }
}

?>