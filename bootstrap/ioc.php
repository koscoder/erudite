<?php

/* 
 * Binding
 */

App::singleton('Freebase', function()
{
   return new Erudite\Freebase;
});

