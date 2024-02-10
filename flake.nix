{
	description = "Plopsaland De Panne";

	inputs = {
		nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
	};

	outputs = { self, nixpkgs }:
	let
		system = "x86_64-linux";
		pkgs = nixpkgs.legacyPackages.${system};
	in
	{
		devShells.${system}.default =
			pkgs.mkShell
				{
					buildInputs = [
						pkgs.corepack_20
						pkgs.nodejs_20
						pkgs.nodePackages.ts-node
					];
			};
	};
}
