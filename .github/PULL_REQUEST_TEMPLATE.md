name: PR

body:
  - type: input
    id: title
    attributes:
      label: タイトル
    validations:
      required: true

  - type: textarea
    attributes:
      label: Description
      description: >-
        要望の説明をできるだけ詳しく書いてください
    validations:
      required: true

  - type: dropdown
    id: cost
    attributes:
      label: 工数
      description: What version of our software are you running?
      options:
        - 1
        - 2
        - 3
        - 5
        - 8

  - type: checkboxes
    attributes:
      label: Conduct
      options:
        - label: >-
            I agree to follow the etizen
          required: true
