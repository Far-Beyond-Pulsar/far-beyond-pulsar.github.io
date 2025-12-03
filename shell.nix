{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_22
    pkgs.yarn
    pkgs.pnpm
  ];

  shellHook = ''
    echo "Node:"
    node -v
  '';
}
