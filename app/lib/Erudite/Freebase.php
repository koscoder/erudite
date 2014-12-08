<?php
namespace Erudite;
/**
 * Class provides interface to connect to freebase
 * and query it
 */
class Freebase {

    protected $apiKey = '';
    protected $serviceUrl;
    
    const SERVICE_URL = 'https://www.googleapis.com/freebase/v1/mqlread';
    
    public function __construct($apiKey = '', $serviceUrl = self::SERVICE_URL)
    {
        $this->setApiKey($apiKey);
        $this->setServiceUrl($serviceUrl);
    }
    
    public function setApiKey($apiKey)
    {
        $this->apiKey = $apiKey;
    }
    
    public function setServiceUrl($serviceUrl)
    {
        $this->serviceUrl = $serviceUrl;
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
        $url = $this->serviceUrl . '?' . http_build_query($params);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $response = json_decode(curl_exec($ch), true);
        curl_close($ch);
        
        return $response['result'];
    }
}

?>