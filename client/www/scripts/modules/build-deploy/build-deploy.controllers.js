// Copyright StrongLoop 2014
BuildDeploy.controller('BuildDeployController', [
  '$scope',
  'BuildDeployService',
  '$log',
  function ($scope, BuildDeployService, $log) {

    $scope.buildId = 'universal';
    $scope.deployId = 'new';
    $scope.viewConsole = {
      logs: []
    };

    $scope.build = {
      git: {
        url: '',
        deploy: 'deploy',
        message: '',
        messageType: 'success'
      },
      universal: {
        git: '',
        archive: '',
        message: '',
        messageType: 'success'
      }
    };

    $scope.deploy = {
      git: {
        url: '',
        deploy: '',
        message: '',
        messageType: 'success'
      },
      universal: {
        git: '',
        archive: '',
        message: '',
        messageType: 'success'
      },
      host: {
        hostname: '',
        port: '',
        processes: ''
      }
    };

    $scope.buildTogglers = [
      { id: 'universal', label: 'Tarball', activeId: 'buildId' },
      { id: 'git', label: 'Git', activeId: 'buildId' }
    ];

    $scope.deployTogglers = [
      { id: 'new', label: 'New', activeId: 'deployId' },
      { id: 'existing', label: 'Existing', activeId: 'deployId' }
    ];

    //set the default active toggler state
    var defaultActiveToggler = $scope.buildTogglers[0];
    $scope.activeId = defaultActiveToggler.id;
    defaultActiveToggler.isActive = true;

    setUI();
  }
]);