# MaterialWorkshop

From [video](https://www.youtube.com/watch?v=8hIBy2VCUSc) tutorial [Material 2 Start](https://github.com/EladBezalel/material2-start) using [Angular Material](https://github.com/angular/material2) Beta 5, with [Flex-Layout](https://github.com/angular/flex-layout).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Links

- [Markdown Guide](https://guides.github.com/features/mastering-markdown/), [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Material 2 Project](https://material.angular.io/), [Material 2 Docs](https://material.angular.io/)
- [Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Notes
- Remember to style sizes on Material components, they're not really designed with defaults
- Use `#{"/deep/"}` instead of `/deep/` to work around the SCSS syntax error, as described in [this comment](https://github.com/Microsoft/vscode/issues/7002#issuecomment-289137531). (Reason: `/deep/` is being depricated for different syntax, so editor support shouldn't be expected.)
- `entryComponents` in an `NgModule` are for components that are rendered dynamically, like with `dialog.open(DialogComponent);`
