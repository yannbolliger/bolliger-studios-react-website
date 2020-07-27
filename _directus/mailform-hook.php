<?php

return [
  'actions' => [
    'item.create.contact_forms' => function (array $data) {
      try {
        notify(
          "formular_2019@bolligerstudios.ch",
          "New contact form submission on bolligerstudios.ch",
          "A new contact form was submitted by\n$data->name $data->email\n\n$data->message"
        );
      }
      catch (\Exception $e) {
        $container = \Directus\Application\Application::getInstance();
        // Monolog\Logger instance
        $logger = $container->fromContainer('logger');
        $logger->error($e);
        // beside error there are:
        // debug, info, notice, warning, critical, alert, and emergency methods
      }
    }
  ]
];
